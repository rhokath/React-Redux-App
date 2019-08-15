import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {getData} from '../actions';
import Dog from "./catFact";

const CatFactList = (props)=> {
    return(
        <div>
            <h1>Do you need miss your dalmatian?</h1>
            {/* <button onClick={props.getData}> {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get Your Cat Facts' */}
        )}<button onClick={props.getData}>see spots</button>
        {props.dogs &&
            props.dogs.map((dog, index) => <Dog key={index} dog={dog}/>)
        }

        </div>
    )
};
const mapStateToProps = state => {
    return {
        test: state.test,
        isLoading: state.isLoading,
        dogs: state.dogs
    }
}

export default connect(mapStateToProps, {getData})(CatFactList);