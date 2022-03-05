import React, { ComponentType, ReactNode } from 'react';

import ErrorBoundary from '../components/ErrorBoundary';

function withErrorBoundaryView<Props>(
	WrappedComponent: ComponentType<Props>,
	renderErrorView?: () => ReactNode,
) {
	// eslint-disable-next-line react/display-name
	return (props: Props) => {
		return (
			<ErrorBoundary renderErrorView={renderErrorView}>
				<WrappedComponent {...props} />
			</ErrorBoundary>
		);
	};
}

export { withErrorBoundaryView };
