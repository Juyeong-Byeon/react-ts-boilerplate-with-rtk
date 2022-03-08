import React, { ReactNode } from 'react';

import styled from 'styled-components';

export default function PageLayout({
	Header,
	Body,
	Footer,
}: {
	Header?: ReactNode;
	Body?: ReactNode;
	Footer?: ReactNode;
}) {
	return (
		<Page>
			{Header}
			{Body}
			{Footer}
		</Page>
	);
}

const Page = styled.section``;
