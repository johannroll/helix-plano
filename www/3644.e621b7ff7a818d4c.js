"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3644],{3644:(_,m,t)=>{t.r(m),t.d(m,{LoginComponent:()=>h});var o=t(4438),c=t(8721),l=t(5873),n=t(9788),i=t(4341),g=t(3002);function p(e,s){1&e&&o.nrm(0,"ion-spinner",15)}function u(e,s){1&e&&o.EFF(0," Login ")}let h=(()=>{var e;class s{toggleShowPassword(){this.showPassword=!this.showPassword}handleLogin(){this.loginForm.valid&&(this.loading=!0,setTimeout(()=>{this.loading=!1,this.loginForm.value.email===this.validLogin.email&&this.loginForm.value.password===this.validLogin.password?this.toastService.successToast("Successfully logged in"):this.toastService.errorToast("Invalid credentials")},2500)),console.log(this.loginForm.value)}constructor(){this.formBuilder=(0,o.WQX)(i.ok),this.toastService=(0,o.WQX)(g.f),this.showPassword=!1,this.loading=!1,this.validLogin={email:"johannroll@gmail.com",password:"Password123"},this.loginForm=this.formBuilder.group({email:["",[i.k0.required,i.k0.email]],password:["",[i.k0.required]]}),(0,c.a)({search:l.$P,eye:l.y5U,eyeOff:l.zsm})}}return(e=s).\u0275fac=function(r){return new(r||e)},e.\u0275cmp=o.VBU({type:e,selectors:[["app-login"]],standalone:!0,features:[o.aNF],decls:28,vars:6,consts:[["slot","start","justify-center","",1,"btn-back"],["defaultHref","/home",1,"toolbar-light-theme"],[3,"fullscreen"],[1,"ion-align-items-center","ion-justify-content-center"],["size","12","size-xl","5","size-lg","5","size-md","6","size-sm","8"],[1,"ion-margin-top"],[3,"ngSubmit","formGroup"],["lines","none"],["formControlName","email","type","email","fill","clear","label","Email","labelPlacement","floating","placeholder","email@domain.com","errorText","Invalid email",1,"ion-margin-bottom"],["formControlName","password","fill","clear","labelPlacement","floating","label","Password","placeholder","","placeholder","password","errorText","Invalid password",1,"ion-margin-bottom",3,"type"],["color","primary","fill","clear","slot","end","aria-label","Show/hide",3,"click"],["slot","icon-only","aria-hidden","true",3,"name"],[1,"forgot-password"],["target","_blank","rel","noopener noreferrer","href","https://login.planningcenteronline.com/password_reset/new"],["type","submit","fill","solid","expand","block",1,"ion-padding-top","ion-margin-top",3,"disabled"],["name","circular"]],template:function(r,a){1&r&&(o.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),o.nrm(3,"ion-back-button",1),o.k0s()()(),o.j41(4,"ion-content",2)(5,"ion-row",3)(6,"ion-col",4)(7,"ion-card")(8,"ion-card-header")(9,"ion-card-title"),o.EFF(10,"Login"),o.k0s(),o.j41(11,"ion-card-subtitle"),o.EFF(12,"Planning Centre"),o.k0s()(),o.j41(13,"ion-card-content",5)(14,"form",6),o.bIt("ngSubmit",function(){return a.handleLogin()}),o.j41(15,"ion-list",7)(16,"ion-item"),o.nrm(17,"ion-input",8),o.k0s(),o.j41(18,"ion-item",5),o.nrm(19,"ion-input",9),o.j41(20,"ion-button",10),o.bIt("click",function(){return a.toggleShowPassword()}),o.nrm(21,"ion-icon",11),o.k0s()()(),o.j41(22,"p",12)(23,"a",13),o.EFF(24,"Forgot password"),o.k0s()(),o.j41(25,"ion-button",14),o.DNE(26,p,1,0,"ion-spinner",15)(27,u,1,0),o.k0s()()()()()()()),2&r&&(o.R7$(4),o.Y8G("fullscreen",!0),o.R7$(10),o.Y8G("formGroup",a.loginForm),o.R7$(5),o.Y8G("type",a.showPassword?"text":"password"),o.R7$(2),o.Y8G("name",a.showPassword?"eye-off":"eye"),o.R7$(4),o.Y8G("disabled",!a.loginForm.valid||a.loading),o.R7$(),o.vxM(26,a.loading?26:27))},dependencies:[n.eU,n.ai,n.W9,n.QW,n.iq,n.Jm,n.nf,n.uz,n.$w,n.el,n.ln,n.hU,n.b_,n.ME,n.I9,n.tN,n.HW,i.X1,i.qT,i.BC,i.cb,i.j4,i.JD,n.w2],styles:["p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-list[_ngcontent-%COMP%]{background:transparent!important}ion-item[_ngcontent-%COMP%]{background:transparent!important;border-radius:8px!important}.forgot-password[_ngcontent-%COMP%]{width:100%;margin-top:8px}ion-spinner[_ngcontent-%COMP%]{height:21px;margin:0}"]}),s})()}}]);