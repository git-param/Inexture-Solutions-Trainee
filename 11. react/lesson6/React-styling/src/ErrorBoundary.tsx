import React, { Component, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State>
{
    constructor(props :Props)
    {
        super(props);
        this.state={hasError:false};
    }
    static getDerivedStateFromError(error: Error)
    {
        console.log("error in get derived: ",error);
        return {hasError: true};
    }
    componentDidCatch(err:Error, errorInfo: React.ErrorInfo)
    {
        console.log("Error boundary catch ",err,": ",errorInfo);
        // return {hasError: true};
    }

    render()
    {
        if (this.state.hasError)
            return <h2>Something went wrong.</h2>;

        return this.props.children;
    }
}

export default ErrorBoundary;