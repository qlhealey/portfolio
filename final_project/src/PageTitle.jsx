import { useEffect } from 'react';

const PageTitle = ({ title }) => {

  useEffect(() => {
    document.title = "Quinn Healey | " + title;
  });

  return null;
};

export default PageTitle;