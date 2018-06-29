import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';  //its give us simple way to bind actions with redux
import { signin } from '../../actions/index';

class Signin extends Component {
    onSubmit = (formPros) => {
        this.props.signin(formPros, () => {
            this.props.history.push('/feature');
        });
    }
    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <fieldset>
                    <div>
                        {this.props.errorMessage}
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" component="input" autoComplete="off" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" component="input" autoComplete="off" />
                    </div>
                    <button>Sign In</button>
                </fieldset>


            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.auth.errorMessage
    }
}

//export default reduxForm({ form: 'signup' })(connect(null, { signup })(Signup));  //This can we easily handle with compose

export default compose(
    connect(mapStateToProps, { signin }),
    reduxForm({ form: 'signin' })
)(Signin);