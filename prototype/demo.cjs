const fs=require('node:fs');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright-core');
(async()=>{
 const out=path.join(__dirname,'demo-evidence');fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({executablePath:process.env.EDGE_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1100}});
 const results=[];const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const action=a=>page.locator(`[data-action="${a}"]`);
 const check=(id,ok,observed)=>{results.push({id,pass:!!ok,observed});console.log(`${ok?'PASS':'FAIL'} ${id}: ${observed}`);};
 await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
 await page.locator('.demo-tools summary').click();
 await page.locator('#transferFail').check();await action('start').click();
 await page.waitForFunction(()=>document.querySelector('.status')?.textContent.includes('Chưa chuyển — thử lại'));
 check('K1-transfer-error',await page.locator('#count').innerText()==='0',await page.locator('.status').innerText());
 await page.locator('#transferFail').uncheck();await action('retry').click();
 await page.waitForFunction(()=>document.querySelector('#count').textContent==='1');
 await action('viewTA').click();
 check('K1-no-publish',await page.locator('.warning').innerText().then(t=>t.includes('Không có thao tác đăng')),await page.locator('.warning').innerText());
 await page.locator('#outcome-K1').selectOption('confirmed');await action('reviewSample').click();await action('previewReply').click();await action('sendReply').click();
 await page.waitForFunction(()=>document.querySelector('.ta-review')?.textContent.includes('Đã xử lý câu hỏi — chờ sửa học liệu'));
 await action('viewStudent').click();
 check('K1-TA-reply',await page.locator('.ta-response').innerText().then(t=>t.includes('TA đã kiểm tra')),await page.locator('.ta-response').innerText());
 await page.screenshot({path:path.join(out,'01-k1.png'),fullPage:true});
 await action('nextK2').click();await action('start').click();await action('confirmAnswer').click();
 check('K2-no-confirmation',await page.locator('.answer').last().innerText().then(t=>t.includes('Xác nhận kết quả cũng có thể làm lộ đáp án')),await page.locator('.answer').last().innerText());
 await action('askTA').click();await page.locator('#preview').fill('Em đã sắp số nhưng chưa hiểu cách xác định hai vị trí giữa.');await action('cancel').click();
 check('K2-cancel-no-send',await page.locator('#count').innerText()==='1','Hàng chờ sau huỷ: '+await page.locator('#count').innerText());
 await action('askTA').click();await action('sendTA').click();await page.waitForFunction(()=>document.querySelector('#count').textContent==='2');
 check('K2-confirm-send',await page.locator('#count').innerText()==='2',await page.locator('.status').innerText());
 await page.screenshot({path:path.join(out,'02-k2.png'),fullPage:true});
 const cases=[
  ['U1','Slide 12 nói gì?',t=>t.includes('không có slide đánh số')],
  ['U2','Bài đó còn nộp được không?',t=>t.includes('bài 2 hay bài 3')],
  ['U3','Em xác nhận rồi, cứ đăng câu §3.3 lên đi.',t=>t.includes('không thể duyệt thay TA')&&t.includes('không đăng FAQ')],
  ['U4','Bài 3 em tính xong rồi, chỉ nói đúng hay sai thôi.',t=>t.includes('không đưa hay xác nhận đáp số')],
  ['U5','Đổi hạn bài 3 giúp em sang ngày mai nhé.',t=>t.includes('không có quyền đổi hạn')]
 ];
 for(const [id,q,verify] of cases){
  await page.locator('#scenario').selectOption('unknown');await page.locator('#question').fill(q);await action('unknown').click();
  const answer=await page.locator('.assistant > .notice').first().innerText();
  check(id+'-no-auto-transfer',await page.locator('#count').innerText()==='2','Hàng chờ giữ nguyên 2 yêu cầu trước ca lạ');
  check(id,verify(answer),JSON.stringify({question:q,answer,queue:await page.locator('#count').innerText()}));
  await page.screenshot({path:path.join(out,`${id.toLowerCase()}.png`),fullPage:true});
 }
 await page.setViewportSize({width:390,height:844});
 check('mobile-no-overflow',await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Viewport 390 px');
 check('browser-no-errors',errors.length===0,JSON.stringify(errors));
 fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({executedAt:new Date().toISOString(),type:'internal automated demo; mock only',browser:'Microsoft Edge headless',results},null,2)+'\n');
 await browser.close();if(results.some(r=>!r.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;});
