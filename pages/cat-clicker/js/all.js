"use strict";var model={currentCat:null,cats:[{clickCntr:0,name:"",imgSrc:"image-1",imgAttribution:""},{clickCntr:0,name:"",imgSrc:"image-2",imgAttribution:""},{clickCntr:0,name:"",imgSrc:"image-3",imgAttribution:""},{clickCntr:0,name:"",imgSrc:"image-4",imgAttribution:""},{clickCntr:0,name:"",imgSrc:"image-5",imgAttribution:""},{clickCntr:0,name:"",imgSrc:"image-6",imgAttribution:""},{clickCntr:0,name:"",imgSrc:"image-7",imgAttribution:""},{clickCntr:0,name:"",imgSrc:"image-8",imgAttribution:""}],catNames:["Whiskers","Buttons","Mr. Wilkinson","James Bond","Ms. Patterson","Kronk","Titan","Tims Pennyworth"],catImgs:[{img:"image-1",att:"https://www.flickr.com/photos/poplinre/625069434/in/photostream/"},{img:"image-2",att:"https://www.flickr.com/photos/chewie/2290467335"},{img:"image-3",att:"https://www.flickr.com/photos/dmzhuk1/13336297525/"},{img:"image-4",att:"https://www.flickr.com/photos/haituoi/12174748174/"},{img:"image-5",att:"https://www.flickr.com/photos/crerwin/1090235720/in/photolist-fpoqBx-2EkK6A-jd89Zh-oXYAc3-rbR7a7-eQyQ9s-pNfUb3-f8Lzve-7wUUmJ-neyNMh-fF1SNo-guvpL7-djzdoC-rRUeFg-dwECB4-byETEf-96GXNo-nD8t86-i3Px3A-eSjzEX-e8hn6f-u4ANKb-aj5nzB-bCywUs-7CnHSG-amRMr6-gsgu54-sBnYXd-doMGnr-rjNQrb-7xQDb4-e5tZLn-swMbdu-aVfJNM-bwJzGz-f3mWZv-qAudKg-76Vzfm-kb2n93-4BignY-96GXk5-hoYTLY-pLcapW-r6ud1t-qd3RjQ-4rPruQ-nF4Ynj-9oXBFj-5hJtCy-fJ6ud6"},{img:"image-6",att:"https://www.flickr.com/photos/jetske"},{img:"image-7",att:"https://www.flickr.com/photos/8494589@N06/2177097057"},{img:"image-8",att:"https://www.flickr.com/photos/deerwooduk/579761138"}],arrayShuffle:function(t){for(var e,i,n=t.length;n;)i=Math.floor(Math.random()*n--),e=t[n],t[n]=t[i],t[i]=e}},octopus={init:function(){model.currentCat=model.cats[0],model.arrayShuffle(model.catNames),model.arrayShuffle(model.catImgs);for(var t=0;t<model.cats.length;t++)model.cats[t].name=model.catNames[t],model.cats[t].imgSrc=model.catImgs[t].img,model.cats[t].imgAttribution=model.catImgs[t].att;catListView.init(),catView.init(),adminView.init()},getCurrentCat:function(){return model.currentCat},getCats:function(){return model.cats},setCurrentCat:function(t){model.currentCat=t},setNewCat:function(t,e,i,n){var a=this.getCurrentCat();a.clickCntr=i,a.imgSrc=e,a.name=t,a.imgAttribution=n},hasCatImg:function(t){for(var e=octopus.getImageList(),i=0;i<e.length;i++)if(e[i].img==t)return{imgAvail:!0,catAttribution:e[i].att}},incrementCounter:function(){model.currentCat.clickCntr++,catView.render()},setCatCounter:function(t,e){t.clickCntr=e},getImageList:function(){return model.catImgs}},catView={init:function(){this.catElem=document.getElementById("cat"),this.catNameElem=document.getElementById("cat-name"),this.catImageElem=document.getElementById("cat-img"),this.countElem=document.getElementById("cat-count"),this.catImageElem.addEventListener("click",function(){octopus.incrementCounter()}),this.render()},render:function(){var t=octopus.getCurrentCat();this.countElem.textContent=t.clickCntr,this.catNameElem.textContent=t.name,this.catImageElem.src="/images/"+t.imgSrc+".jpg"}},catListView={init:function(){this.catListElem=document.getElementById("menu"),this.render()},render:function(){var t,e,i,n,a=octopus.getCats();this.catListElem.innerHTML="";var m=document.createElement("h2");m.id="menu-title",m.innerHTML="MENU",this.catListElem.appendChild(m);var o=document.createElement("div");for(o.id="menu-container",n=0;n<a.length;n++)t=a[n],e=document.createElement("div"),e.className="menu-item",i=document.createElement("img"),i.className="menu-item-image",i.setAttribute("src","/images/"+t.imgSrc+".jpg"),i.setAttribute("alt","Menu Item Image "+n+", Hong Kong Web developer"),e.appendChild(i),e.addEventListener("click",function(t){return function(){octopus.setCurrentCat(t),catView.render()}}(t)),this.catListElem.appendChild(e)}},adminView={init:function(){this.adminElem=document.getElementById("settings"),this.adminBtn=document.getElementById("admin-btn"),this.newName=document.getElementById("newCatName"),this.newImg=document.getElementById("newImgSrc"),this.availImgList=document.getElementById("imgsAvail"),this.newCount=document.getElementById("newCatCount"),this.cancelBtn=document.getElementById("Cancel"),this.confirmBtn=document.getElementById("Confirm"),this.render()},render:function(){this.adminElem.addEventListener("click",function(t){this.setAttribute("style","transition: all 0.5s linear;");var e=t.target,i=octopus.getCurrentCat(),n="",a=octopus.getImageList(),m=!1,o="",c={};e!=adminView.adminBtn&&e!=adminView.cancelBtn&&e!=adminView.confirmBtn||adminView.showForm(),e==adminView.confirmBtn?(o=adminView.newImg.value.toLowerCase(),c=octopus.hasCatImg(o),c&&(m=c.imgAvail,n=c.catAttribution),0==m||isNaN(adminView.newCount.value)||""==adminView.newName.value?(adminView.showForm(),0==m&&alert("Please make sure to use an image that is available!"),isNaN(adminView.newCount.value)&&alert("Please make sure to use a number for the click counter!"),""==adminView.newName.value&&alert("Please make sure to use a Name for your cat!")):octopus.setNewCat(adminView.newName.value,adminView.newImg.value,adminView.newCount.value,n),catView.render(),catListView.render()):e==adminView.adminBtn&&adminView.adminElem.classList.contains("open")&&adminView.popForm(i,a)})},popForm:function(t,e){this.newImg.value=t.imgSrc,this.newName.value=t.name,this.newCount.value=t.clickCntr;for(var i="",n=0;n<e.length;n++)n==e.length-1?i+=e[n].img:i=i+e[n].img+", ";this.availImgList.innerHTML=i},showForm:function(){this.adminElem.classList.toggle("open")}};octopus.init();