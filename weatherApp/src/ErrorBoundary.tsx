import React, { Component } from "react";

type CustomError = {
  errorCode: number;
  errorMsg: string;
};

class ErrorBoundary extends Component {
  state = { hasError: false };

  constructor(props: any) {
    super(props);
  }

  static getDerivedStateFromError(error: CustomError) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("Error logging in my system!");
    this.setState({
      hasError: true,
    });
  }

  render() {
    console.log(this.state);
    if (this.state.hasError) {
      return <div>My Error</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
