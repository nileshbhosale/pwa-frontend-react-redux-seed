import React from "react";
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

var style = {
  	margin: "2%",
  }

// Home page component
export default class Home extends React.Component {
  

  // render
  render() {
    return (
      <div className="page-home">
        <Card style={style}>
	        <CardHeader
	          title="Nilesh Bhosale"
	          avatar={
	          	<Avatar 
	          	src="https://avatars2.githubusercontent.com/u/12280430?v=3&s=460" 
	          	size={125}/>
	          }/>
	    
	        <CardText>
	          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
	          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
	          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
	        </CardText>
      	</Card>

      </div>
    );
  }
}