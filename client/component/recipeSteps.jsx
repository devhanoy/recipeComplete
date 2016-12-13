import React from 'react';

export class Steps extends React.Component {
	
  render() {
    return <ul>
			{this.props.steps.map((step) =>  <li>{step.name}</li>) }
			</ul>;
  }
}

