import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - EduHub`;
    }, [title]);
};

export default useTitle;
