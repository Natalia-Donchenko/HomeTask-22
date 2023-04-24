import React from "react";
import error from "./img/error.avif"


class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
      <>
      <div className="error">
        <img className="error-img" src={error} />
      </div>
        
      </>
      )
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;