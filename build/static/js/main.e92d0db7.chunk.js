(this["webpackJsonpmyflix-client"]=this["webpackJsonpmyflix-client"]||[]).push([[0],{66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),c=a(19),n=a.n(c),o=a(69),i=a(11),l=a(9),d=a(47),h=a(16),j=a(10),m=a(1);class b extends r.a.Component{keypressCallback(e){console.log(e.key)}componentDidMount(){document.addEventListener("keypress",this.keypressCallback)}componentWillUnmount(){document.removeEventListener("keypress",this.keypressCallback)}addFav(){const e=localStorage.getItem("token"),t=localStorage.getItem("user");o.a.post("https://myflixdb1112.herokuapp.com/users/".concat(t,"/movies/").concat(this.props.movie._id),{},{headers:{Authorization:"Bearer ".concat(e)}}).then((e=>{console.log("Movie added to favorite list"),alert("Movie has been successfully added to favorites.")}))}render(){const{movie:e,onBackClick:t}=this.props;return Object(m.jsxs)("div",{className:"movie-view",children:[Object(m.jsx)("div",{className:"movie-poster",children:Object(m.jsx)("img",{src:e.ImagePath})}),Object(m.jsxs)("div",{className:"movie-title",children:[Object(m.jsx)("span",{className:"label",children:"Title: "}),Object(m.jsx)("span",{className:"value",children:e.Title})]}),Object(m.jsxs)("div",{className:"movie-description",children:[Object(m.jsx)("span",{className:"label",children:"Description: "}),Object(m.jsx)("span",{className:"value",children:e.Description})]}),Object(m.jsx)(j.a,{onClick:()=>{t(null)},children:"Back!"}),Object(m.jsx)(i.b,{to:"/directors/".concat(e.Director.Name),children:Object(m.jsx)(j.a,{variant:"secondary",children:"Director"})}),Object(m.jsx)(i.b,{to:"/genres/".concat(e.Genre.Name),children:Object(m.jsx)(j.a,{variant:"secondary",children:"Genre"})}),Object(m.jsx)(j.a,{variant:"dark",value:e._id,onClick:t=>this.addFav(e,t),children:"Add to favorites"})]})}}var u=a(8);function p(e){const[t,a]=Object(s.useState)(""),[r,c]=Object(s.useState)("");return Object(m.jsxs)(u.a,{className:"login-form",children:[Object(m.jsxs)(u.a.Group,{controlId:"formUsername",children:[Object(m.jsx)(u.a.Label,{children:"Username:"}),Object(m.jsx)(u.a.Control,{type:"text",onChange:e=>a(e.target.value)})]}),Object(m.jsxs)(u.a.Group,{controlId:"formPassword",children:[Object(m.jsx)(u.a.Label,{children:"Password:"}),Object(m.jsx)(u.a.Control,{type:"password",onChange:e=>c(e.target.value)}),Object(m.jsx)(u.a.Control.Feedback,{type:"invalid",children:"Password not correct"})]}),Object(m.jsx)(j.a,{variant:"primary",type:"submit",onClick:a=>{a.preventDefault(),console.log(t,r),o.a.post("https://myflixdb1112.herokuapp.com/login",{Username:t,Password:r}).then((t=>{const a=t.data;e.onLoggedIn(a)})).catch((e=>{console.log("no such user!")}))},children:"Submit"})," \xa0\xa0",Object(m.jsx)(i.b,{to:"/signup",children:Object(m.jsx)(j.a,{variant:"success",children:"Sign Up"})})]})}function x(e){const[t,a]=Object(s.useState)(""),[r,c]=Object(s.useState)(""),[n,i]=Object(s.useState)(""),[l,d]=Object(s.useState)(""),h=Object(s.useState)(null),b=a=>{a.preventDefault(),p()&&(o.a.post("https://myflixdb1112.herokuapp.com/users",{Username:t,Password:r,Email:n,Birthday:l}).then((e=>{const t=e.data;console.log(t),alert("User created sucessfully"),window.open("/","_self")})).catch((e=>{alert("Username Already taken")})),console.log(t,r,n,l),e.onSignup(t,r,n,l))},p=()=>{const e={},a={},s={},c={};let o=!0;return t.length<6?(e.usernameBad="Username must be alphanumeric and at least 6 characters long.",o=!1):n.includes("@")?r.length<6?(s.passwordBad="Your password must be at least 6 characters long.",o=!1):""===l&&(c.birthdayBad="Please enter your birthday.",o=!1):(a.emailBad="Please enter your email.",o=!1),o};return Object(m.jsxs)(u.a,{className:"RegForm",onSubmit:b,noValidate:!0,validated:h,children:[Object(m.jsxs)(u.a.Group,{controlId:"formGroupUsername",children:[Object(m.jsx)(u.a.Label,{children:"Username"}),Object(m.jsx)(u.a.Control,{type:"text",placeholder:"Enter username",value:t,onChange:e=>a(e.target.value),required:!0}),Object(m.jsx)(u.a.Control.Feedback,{type:"invalid",children:"Please provide a valid username, 6 characters or more."})]}),Object(m.jsxs)(u.a.Group,{controlId:"formGroupPassword",children:[Object(m.jsx)(u.a.Label,{children:"Password"}),Object(m.jsx)(u.a.Control,{type:"password",placeholder:"Enter a Password",value:r,onChange:e=>c(e.target.value),required:!0}),Object(m.jsx)(u.a.Control.Feedback,{type:"invalid",children:"Please provide a valid password."}),Object(m.jsx)(u.a.Text,{children:"Password must be at least 6 characters long"})]}),Object(m.jsxs)(u.a.Group,{controlId:"formGroupEmail",children:[Object(m.jsx)(u.a.Label,{children:"Email"}),Object(m.jsx)(u.a.Control,{type:"email",placeholder:"example@email.com",value:n,onChange:e=>i(e.target.value),required:!0}),Object(m.jsx)(u.a.Control.Feedback,{type:"invalid",children:"Please provide a valid email."}),Object(m.jsx)(u.a.Text,{children:"We will never share your information"})]}),Object(m.jsxs)(u.a.Group,{controlId:"formGroupBirthday",children:[Object(m.jsx)(u.a.Label,{children:"Birthday"}),Object(m.jsx)(u.a.Control,{type:"date",placeholder:"00-00-0000",value:l,onChange:e=>d(e.target.value),required:!0})]}),Object(m.jsxs)("span",{children:[Object(m.jsx)(j.a,{type:"submit",onClick:b,children:"Submit"})," \xa0\xa0",Object(m.jsx)(j.a,{variant:"secondary",onClick:history.goBack,children:"Back"})]})]})}class v extends r.a.Component{render(){const{director:e,onBackClick:t}=this.props;return Object(m.jsxs)("div",{className:"director-view",children:[Object(m.jsxs)("div",{className:"director-name",children:[Object(m.jsx)("span",{className:"label",children:"Name: "}),Object(m.jsx)("span",{className:"value",children:e.Name})]}),Object(m.jsxs)("div",{className:"director-bio",children:[Object(m.jsx)("span",{className:"label",children:"Bio: "}),Object(m.jsx)("span",{className:"value",children:e.Bio})]}),Object(m.jsxs)("div",{className:"director-birthday",children:[Object(m.jsx)("span",{className:"label",children:"Birthday: "}),Object(m.jsx)("span",{className:"value",children:e.Born})]}),Object(m.jsx)(j.a,{onClick:()=>{t(null)},children:"Back!"})]})}}class O extends r.a.Component{render(){const{genre:e,onBackClick:t}=this.props;return Object(m.jsxs)("div",{className:"genre-view",children:[Object(m.jsxs)("div",{className:"genre-name",children:[Object(m.jsx)("span",{className:"label",children:"Name: "}),Object(m.jsx)("span",{className:"value",children:e.Name})]}),Object(m.jsxs)("div",{className:"genre-description",children:[Object(m.jsx)("span",{className:"label",children:"Description: "}),Object(m.jsx)("span",{className:"value",children:e.Description})]}),Object(m.jsx)(j.a,{onClick:()=>{t(null)},children:"Back!"})]})}}var g=a(41),y=a(25),k=a(72),f=a(18);const C="SET_MOVIES",S="SET_FILTER",B="SHOW_USER";class w extends r.a.Component{constructor(){super(),this.handleUpdateUser=e=>{this.setState({validated:null});if(!1===e.currentTarget.checkValidity())return e.preventDefault(),e.stopPropagation(),void this.setState({validated:!0});e.preventDefault();const t=localStorage.getItem("user"),a=localStorage.getItem("token");o.a.put("https://myflixdb1112.herokuapp.com/users/".concat(t),{Username:this.state.Username,Password:this.state.Password,Email:this.state.Email,Birthday:this.state.Birthday},{headers:{Authorization:"Bearer ".concat(a)}}).then((e=>{alert("User is updated!"),this.setState({Username:e.data.Username,Password:e.data.Password,Email:e.data.Email,Birthday:e.data.Birthday}),localStorage.setItem("user",this.state.Username)})).catch((function(e){console.log(e)}))},this.state={Username:"",Password:"",Email:"",Birthday:"",FavoriteMovies:[],validated:"null"}}componentDidMount(){let e=localStorage.getItem("token");null!==e&&this.getUser(e)}getUser(e){const t=localStorage.getItem("user");o.a.get("https://myflixdb1112.herokuapp.com/users/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}}).then((e=>{this.setState({Username:e.data.Username,Password:e.data.Password,Email:e.data.Email,Birthday:e.data.Birthday,FavoriteMovies:e.data.FavoriteMovies})})).catch((function(e){console.log(e)}))}handleDeleteUser(e){const t=localStorage.getItem("user"),a=localStorage.getItem("token");o.a.delete("https://myflixdb1112.herokuapp.com/users/".concat(t),{headers:{Authorization:"Bearer ".concat(a)}}).then((()=>{alert("You have successfully deleted your account!"),localStorage.removeItem("user"),localStorage.removeItem("token"),window.open("localhost:1234")})).catch((e=>{console.log(e),console.log("something broke in handleDeleteUser")}))}setUsername(e){this.Username=e,this.setState({Username:e})}setPassword(e){this.Password=e,this.setState({Password:e})}setEmail(e){this.Email=e,this.setState({Email:e})}setBirthday(e){this.Birthday=e,this.setState({Birthday:e})}handleRemove(e){const t=localStorage.getItem("user"),a=localStorage.getItem("token");console.log(e),o.a.delete("https://myflixdb1112.herokuapp.com/users/".concat(t,"/movies/").concat(e),{headers:{Authorization:"Bearer ".concat(a)}}).then((e=>{console.log(e),this.componentDidMount(),alert("Movie has been successfully removed from favorites.")})).catch((e=>{console.log(e)}))}render(){const{username:e,Password:t,email:a,movies:s}=this.props,{movie:r}=this.props,{FavoriteMovies:c,validated:n,Birthday:o,birthday:l}=this.state;return Object(m.jsxs)(g.a,{children:[Object(m.jsx)(d.a,{children:Object(m.jsxs)(h.a,{children:[Object(m.jsxs)(y.a,{style:{width:"22rem"},children:[Object(m.jsx)(y.a.Header,{children:"Your Information:"}),Object(m.jsxs)(k.a,{variant:"flush",children:[Object(m.jsx)(k.a.Item,{children:Object(m.jsxs)("p",{children:["Username: ","".concat(this.state.Username)]})}),Object(m.jsx)(k.a.Item,{children:Object(m.jsxs)("p",{children:["Email: ","".concat(this.state.Email)]})}),Object(m.jsx)(k.a.Item,{children:Object(m.jsxs)("p",{children:["Birthday: ","".concat(this.state.Birthday)]})})]})]}),Object(m.jsx)("p",{children:"Favorite Movies:"})]})}),Object(m.jsx)(d.a,{children:c.length>0&&s.map((e=>{if(e._id===c.find((t=>t===e._id)))return Object(m.jsx)(h.a,{md:6,children:Object(m.jsxs)(y.a,{style:{width:"15rem"},children:[Object(m.jsx)(y.a.Img,{variant:"top",src:e.ImagePath}),Object(m.jsxs)(y.a.Body,{children:[Object(m.jsx)(y.a.Title,{children:e.Title}),Object(m.jsxs)(i.b,{to:"/movies/".concat(e._id),children:[Object(m.jsx)(j.a,{variant:"secondary",children:"Info"}),"\xa0\xa0"]}),Object(m.jsx)(j.a,{value:e._id,variant:"danger",onClick:e=>{this.handleRemove(e.target.value)},children:"Remove"})]})]},e._id)})}))}),Object(m.jsx)("h1",{children:" Update Form"}),Object(m.jsxs)(u.a,{noValidate:!0,validated:n,className:"updateForm",onSubmit:e=>this.handleUpdateUser(e,this.Username,this.Password,this.Email,this.Birthday),children:[Object(m.jsxs)(u.a.Group,{controlId:"formGroupUsername",children:[Object(m.jsx)(u.a.Label,{children:"Username"}),Object(m.jsx)(u.a.Control,{type:"text",placeholder:"Enter your new username",value:e,onChange:e=>this.setUsername(e.target.value),required:!0}),Object(m.jsx)(u.a.Text,{className:"text-muted",children:"Username has to be 6+ Characters"}),Object(m.jsx)(u.a.Control.Feedback,{type:"invalid",children:"Please provide a valid username."})]}),Object(m.jsxs)(u.a.Group,{controlId:"formGroupPassword",children:[Object(m.jsx)(u.a.Label,{children:"Password"}),Object(m.jsx)(u.a.Control,{type:"password",placeholder:"New Password",value:t,onChange:e=>this.setPassword(e.target.value),required:!0}),Object(m.jsx)(u.a.Text,{className:"text-muted",children:"Password has to be 6+ Characters"}),Object(m.jsx)(u.a.Control.Feedback,{type:"invalid",children:"Please provide a valid Password."})]}),Object(m.jsxs)(u.a.Group,{controlId:"formGroupEmail",children:[Object(m.jsx)(u.a.Label,{children:"Email"}),Object(m.jsx)(u.a.Control,{type:"email",placeholder:"New Email",value:a,onChange:e=>this.setEmail(e.target.value),required:!0}),Object(m.jsx)(u.a.Control.Feedback,{type:"invalid",children:"Please provide a valid email."})]}),Object(m.jsxs)(u.a.Group,{controlId:"formGroupBirthday",children:[Object(m.jsx)(u.a.Label,{children:"Birthday"}),Object(m.jsx)(u.a.Control,{type:"date",placeholder:"00-00-0000",value:l,onChange:e=>this.setBirthday(e.target.value),required:!0})]}),Object(m.jsx)(j.a,{type:"submit",onClick:this.handleUpdateUser,children:" Submit "}),"\xa0\xa0"]}),Object(m.jsx)(j.a,{onClick:e=>this.handleDeleteUser(e),children:"Delete User"})]})}}Object(f.b)((e=>({user:e.user,movies:e.movies})),{showUser:function(e){return{type:B,value:e}}})(w);var U=a(70),I=a(71);class N extends r.a.Component{constructor(){super(),this.state={}}render(){const{user:e}=this.props;return Object(m.jsx)(U.a,{bg:"dark",variant:"dark",children:Object(m.jsxs)(g.a,{children:[Object(m.jsx)(U.a.Brand,{children:" MyFlix"}),Object(m.jsxs)(I.a,{className:"me-auto",children:[Object(m.jsx)(I.a.Link,{as:i.b,to:"/",children:"Home"}),Object(m.jsx)(I.a.Link,{as:i.b,to:"/",children:"Movies"})," ",Object(m.jsx)(I.a.Link,{as:i.b,to:"/profile",children:"Profile"}),Object(m.jsx)(I.a.Link,{as:i.b,to:"/signup",children:"Sign Up"})]})]})})}}var P=Object(f.b)(null,{setFilter:function(e){return{type:S,value:e}}})((function(e){return Object(m.jsx)(u.a.Control,{onChange:t=>e.setFilter(t.target.value),value:e.visibilityFilter,placeholder:"filter"})}));class E extends r.a.Component{render(){const{movie:e}=this.props;return Object(m.jsxs)(y.a,{children:[Object(m.jsx)(y.a.Img,{variant:"top",src:e.ImagePath}),Object(m.jsxs)(y.a.Body,{children:[Object(m.jsx)(y.a.Title,{children:e.Title}),Object(m.jsx)(y.a.Text,{children:e.Description}),Object(m.jsx)(i.b,{to:"/movies/".concat(e._id),children:Object(m.jsx)(j.a,{variant:"link",children:"Open"})})]})]})}}var F=Object(f.b)((e=>{const{visibilityFilter:t}=e;return{visibilityFilter:t}}))((function(e){const{movies:t,visibilityFilter:a}=e;let s=t;return""!==a&&(s=t.filter((e=>e.Title.toLowerCase().includes(a.toLowerCase())))),t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h.a,{md:12,style:{margin:"1em"},children:Object(m.jsx)(P,{visibilityFilter:a})}),s.map((e=>Object(m.jsx)(h.a,{md:3,children:Object(m.jsx)(E,{movie:e})},e._id)))]}):Object(m.jsx)("div",{className:"main-view"})}));class L extends r.a.Component{constructor(){super(),this.state={selectedMovie:null,user:null,userData:null}}componentDidMount(){let e=localStorage.getItem("token");localStorage.getItem("user");null!==e&&(this.setState({user:localStorage.getItem("user"),token:localStorage.getItem("token")}),this.getMovies(e),this.getUserinfo(e))}onLoggedIn(e){console.log(e),this.setState({user:e.user.Username}),this.setState({userData:e.user}),localStorage.setItem("token",e.token),localStorage.setItem("user",e.user.Username),this.getMovies(e.token)}setSelectedMovie(e){this.setState({selectedMovie:e})}onLoggedOut(){localStorage.removeItem("token"),localStorage.removeItem("user"),this.setState({user:null})}getMovies(e){o.a.get("https://myflixdb1112.herokuapp.com/movies",{headers:{Authorization:"Bearer ".concat(e)}}).then((e=>{this.props.setMovies(e.data)})).catch((function(e){console.log(e)}))}getUserinfo(e){o.a.get("https://myflixdb1112.herokuapp.com/users/${username}",{headers:{Authorization:"Beared ".concat(e)}}).then((e=>{this.setState({users:e.data})})).catch((function(e){console.log(e)}))}getUsers(e){o.a.get("https://myflixdb1112.herokuapp.com/users",{headers:{Authorization:"Beared ".concat(e)}}).then((e=>{this.setState({users:e.data})})).catch((function(e){console.log(e)}))}onSignup(e){console.log(e),this.setState({signup:e})}render(){const{movies:e}=this.props,{user:t}=this.state;return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(N,{}),Object(m.jsx)("div",{children:this.onLoggedIn?Object(m.jsx)(j.a,{variant:"outline-danger",onClick:()=>{this.onLoggedOut()},children:"Logout"}):Object(m.jsx)(p,{})}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/",render:()=>t?0===e.length?Object(m.jsx)("div",{className:"main-view"}):Object(m.jsx)(F,{movies:e}):Object(m.jsx)(h.a,{children:Object(m.jsx)(p,{onLoggedIn:e=>this.onLoggedIn(e)})})}),Object(m.jsx)(l.b,{path:"/signup",render:()=>t?Object(m.jsx)(l.a,{to:"/"}):Object(m.jsx)(h.a,{children:Object(m.jsx)(x,{})})}),Object(m.jsx)(l.b,{path:"/movies/:movieId",render:a=>{let{match:s,history:r}=a;return t?Object(m.jsx)(h.a,{md:8,children:Object(m.jsx)(b,{movie:e.find((e=>e._id===s.params.movieId)),onBackClick:()=>r.goBack()})}):Object(m.jsx)(l.a,{to:"/"})}}),Object(m.jsx)(l.b,{path:"/directors/:name",render:a=>{let{match:s,history:r}=a;return t?Object(m.jsx)(h.a,{md:8,children:Object(m.jsx)(v,{director:e.find((e=>e.Director.Name===s.params.name)).Director,onBackClick:()=>r.goBack()})}):Object(m.jsx)(l.a,{to:"/"})}}),Object(m.jsx)(l.b,{path:"/genres/:name",render:a=>{let{match:s,history:r}=a;return t?Object(m.jsx)(h.a,{md:8,children:Object(m.jsx)(O,{genre:e.find((e=>e.Genre.Name===s.params.name)).Genre,onBackClick:()=>r.goBack()})}):Object(m.jsx)(l.a,{to:"/"})}}),Object(m.jsx)(l.b,{path:"/profile",render:(a,s)=>t?Object(m.jsx)(h.a,{md:8,children:Object(m.jsx)(w,{user:this.state.userData,FavoriteMovies:t.FavoriteMovies,movies:e,onBackClick:()=>s.goBack()})}):Object(m.jsx)(l.a,{to:"/"})})]})]})}}var M=Object(f.b)((e=>({movies:e.movies})),{setMovies:function(e){return{type:C,value:e}}})(L),D=a(36);const G=Object(D.a)({visibilityFilter:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t.type===S?t.value:e},movies:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===C?t.value:e},user:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===B?t.value:e}});var T=G;a(66);const _=Object(D.b)(T);class A extends r.a.Component{render(){return Object(m.jsx)(f.a,{store:_,children:Object(m.jsx)(g.a,{children:Object(m.jsx)(M,{})})})}}const q=document.getElementsByClassName("app-container")[0];n.a.render(r.a.createElement(A),q)}},[[67,1,2]]]);
//# sourceMappingURL=main.e92d0db7.chunk.js.map