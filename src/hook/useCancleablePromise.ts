//출처 https://rajeshnaroth.medium.com/writing-a-react-hook-to-cancel-promises-when-a-component-unmounts-526efabf251f

import { CancelablePromise, makeCancelable } from '../util/makeCancleable';
import { MutableRefObject, useEffect, useRef } from 'react';

export default function useCancellablePromise() {
	const promises: MutableRefObject<CancelablePromise<any>[]> = useRef();

	useEffect(() => {
		promises.current = [];
		return () => promises.current.forEach((promise) => promise.cancel());
	}, []);

	function addPromise<T>(promise: Promise<T>) {
		const _promise = makeCancelable(promise);
		promises.current.push(_promise);

		return _promise.promise;
	}

	return { addPromise };
}
