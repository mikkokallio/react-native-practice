import React from 'react';
import { render, getAllByTestId } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      //debug();

      const nameNodes  = getAllByTestId('name');
      const descNodes  = getAllByTestId('description');
      const langNodes  = getAllByTestId('language');
      const forkNodes  = getAllByTestId('fork');
      const starNodes  = getAllByTestId('star');
      const rateNodes  = getAllByTestId('rate');
      const revwNodes  = getAllByTestId('review');
  
      expect(nameNodes[0]).toHaveTextContent('jaredpalmer/formik');
      expect(descNodes[0]).toHaveTextContent('Build forms in React, without the tears');
      expect(langNodes[0]).toHaveTextContent('TypeScript');
      expect(forkNodes[0]).toHaveTextContent('1.6k');
      expect(starNodes[0]).toHaveTextContent('21.9k');
      expect(rateNodes[0]).toHaveTextContent('88');
      expect(revwNodes[0]).toHaveTextContent('3');
      expect(nameNodes[1]).toHaveTextContent('async-library/react-async');
      expect(descNodes[1]).toHaveTextContent('Flexible promise-based React data loader');
      expect(langNodes[1]).toHaveTextContent('JavaScript');
      expect(forkNodes[1]).toHaveTextContent('69');
      expect(starNodes[1]).toHaveTextContent('1.8k');
      expect(rateNodes[1]).toHaveTextContent('72');
      expect(revwNodes[1]).toHaveTextContent('3');
    });
  });
});