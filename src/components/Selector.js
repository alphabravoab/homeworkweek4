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
addIt = ( event ) => {
  event.preventDefault()
  const item = this.state.item
  this.props.updateSelection(item)
}


  handleChange = ( event ) => {
  const name = event.target.value;
  const currentdata = data[name];
    this.setState({
       item: {
         name : name,
         manufacturer: currentdata.manufacturer,
         year :currentdata.year,
         origin :currentdata.origin
       }
    })
}
  render() {
    return(
       <div>
         <form onSubmit={ this.addIt }>
             <select onChange = { this.handleChange }>
                 <option value = "">-- pick a model -- </option>
                 <option value = "Ivel Z3"> Ivel Z3 (1969) </option>
                 <option value = "Bally Astrocade"> Bally Astrocade (1977) </option>
                 <option value = "Sord M200 Smart Home Computer"> Sord M200 Smart Home Computer (1977) </option>
                 <option value = "Commodore 64"> Commodore 64 (1982) </option>
             </select>
             <input type="submit" value="ADD" />
          </form>
          { this.props.item.map(item => <ModelDetails { ...item } /> ) }
       </div>
       )
     }
}

const mapStateToProps = state => ({
    item: state.selectReducer
})

const mapDispatchToProps = dispatch => ({
  updateSelection: item => dispatch(updateSelection(item))
})

export default connect( mapStateToProps, mapDispatchToProps, ) (Selector)
