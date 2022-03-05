import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
	renderErrorView?: () => ReactNode;
	children?: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {}

	render() {
		if (this.state.hasError) {
			return this.props.renderErrorView
				? this.props.renderErrorView()
				: 'Something went wrong.';
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
