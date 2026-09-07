import {mkdirSync,copyFileSync,existsSync} from 'node:fs';
for(const route of ['research','publications','media','cv']) {
 const source=`dist/client/${route}.html`;
 if(!existsSync(source)) throw new Error(`Missing exported page: ${source}`);
 mkdirSync(`dist/client/${route}`,{recursive:true});
 copyFileSync(source,`dist/client/${route}/index.html`);
}

// GitHub Pages publishes the docs folder; regenerate it only after a successful export.
import {cpSync,rmSync,readFileSync} from 'node:fs';
if(!existsSync('dist/client/index.html') || readFileSync('dist/client/CNAME','utf8').trim() !== 'jihyehan.com') throw new Error('Incomplete site export');
rmSync('docs',{recursive:true,force:true});
cpSync('dist/client','docs',{recursive:true});
