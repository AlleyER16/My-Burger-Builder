import { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";

import Aux from "../Auxiliary/Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    componentWillMount() {
      this.requestInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.responseInterceptor = axios.interceptors.response.use(
        (res) => {
          return res;
        },
        (err) => {
          this.setState({ error: err });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.request.eject(this.responseInterceptor);
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalCloseHandler={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
