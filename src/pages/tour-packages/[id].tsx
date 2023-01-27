import { Container } from '@mantine/core';
import { NextPage } from 'next';
import Router from 'next/router';

const SingleTour: NextPage = () => {
	return <Container size='lg'>{Router.query.id}</Container>;
};

export default SingleTour;
