myheader = <Child/>;
{
    return (
      <div>
         <center>
          {myheader}
             <button type="button" onClick={this.delHeader}>Delete Header</button> <hr></hr>

             <h3>Count is {this.state.count}</h3>
             <button type="button" onClick={()=>this.setState({count:this.state.count+5})}>Click me</button>
         </center>
      </div>
    )
}


class Child extends Component{

    componentWillUnmount(){
console.log('i am component will unmount method')
    }

    render(){
        return(
            <h1>Hello Sathya</h1>
        );
    }
}

export default FullLife;
