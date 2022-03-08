//출처 https://rajeshnaroth.medium.com/writing-a-react-hook-to-cancel-promises-when-a-component-unmounts-526efabf251f
export function makeCancelable<T>(promise: Promise<T>): CancelablePromise<T> {
	let isCanceled = false;
	const wrappedPromise = new Promise<T>((resolve, reject) => {
		promise
			.then((val) => (isCanceled ? reject({ isCanceled }) : resolve(val)))
			.catch((error) => (isCanceled ? reject({ isCanceled }) : reject(error)));
	});
	return {
		promise: wrappedPromise,
		cancel() {
			isCanceled = true;
		},
	};
}

export interface CancelablePromise<T> {
	cancel: () => void;
	promise: Promise<T>;
}
