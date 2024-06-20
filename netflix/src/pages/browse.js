import React from 'react';
import { BrowseContainer } from '../container/browse';
import useContent from '../hooks/usecontent';
import selectionFilter from '../utlis/selection';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
