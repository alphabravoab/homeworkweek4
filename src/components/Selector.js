import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ModelDetails from './ModelDetails'
import {updateSelection} from '../actions/actionSelection'

const data = {
    "Ivel Z3": {
     manufacturer: "Ivasim",
     year: 1969,
     origin: "Croatia"
    },
    "Bally Astrocade": {
     manufacturer: "Bally Consumer Products",
     year: 1977,
     origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
     manufacturer: "Sord Computer Corporation",
     year: 1977,
     origin: "Japan"
    },
    "Commodore 64": {
     manufacturer: "Commodore",
     year: 1982,
     origin: "USA"
    }

}

class Selector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {item: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.addIt = this.addIt.bind(this);
  }
componentDidUpdate(){
  console.log("props", this.props)
}
addIt(event) {
  console.log(event.target)
  event.preventDefault(event.item)
  updateSelection(event.target)
//  console.log(this.state.item)
}


  handleChange = (event) => {
  //  console.log(data[event.target.value])
    this.setState({
       item: event.target.value
    })
}
  render() {
    return(
       <div>
         <ModelDetails />
           <form onSubmit={this.addIt}>
             <select onChange={this.handleChange}>
                 <option value="">-- pick a model --</option>
                 <option value={data["Ivel Z3"]}>Ivel Z3 (1969)</option>
                 <option value={data["Bally Astrocade"]}>Bally Astrocade (1977)</option>
                 <option value={data["Sord M200 Smart Home Computer"]}>Sord M200 Smart Home Computer (1977)</option>
                 <option value={data["Commodore 64"]}>Commodore 64 (1982)</option>
             </select>
             <input type="submit" value="ADD" />
          </form>
       </div>
       )
     }
}




const mapStateToProps = function (state) {
  return {
    item: state.item
  }
}
const mapDispatchToProps = { updateSelection }

export default connect( mapStateToProps, mapDispatchToProps, ) (Selector)
