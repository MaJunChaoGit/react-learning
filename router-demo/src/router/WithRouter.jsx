import React,{Component} from 'react'
import {Switch,Route,NavLink,Redirect,withRouter} from  'react-router-dom'
class NotFound extends Component { 
  render() {
    return <div>NotFound</div>
  }
}
class One extends Component { 
  render() {
    console.log(this.props.match)
    return <div>One</div>
  }
}

class App extends Component{
  constructor(props){
    super(props);
    props.history.listen((location)=>{  //在这里监听location对象
      //切换路由的时候输出"/one/users"和"/one/companies"
      switch(location.pathname){   //根据路径不同切换不同的浏览器title
        case '/one/users' : document.title = '用户列表'; break;
        case '/one/companies' : document.title = '公司列表'; break;
        default : break;
      }
    })
  }
  render(){
    return (<div className='app'>
      <NavLink to='/one/users'>用户列表</NavLink>
      <NavLink to='/one/companies'>公司列表</NavLink>
      <Switch>
        <Route path='/one/:type?'  component={One} />
        <Redirect from='/' to='/one' exact />
        <Route component={NotFound} />
      </Switch>
    </div>)
  }
}
export default withRouter(App);

