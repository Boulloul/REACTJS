import React, { Component } from "react";


class title extends Component {
  
  render() {
    return <div className="row">
      <div className="col-sm-12">
        <h1><span class="badge badge-secondary">{this.props.titre}</span></h1>
        <h3><span class="badge badge-success">par :{this.props.desc}</span></h3>
        <h4><span class="badge badge-warning">encadré par:{this.props.prof}</span></h4>


      </div>
    </div>;
  }
}
export default title;
