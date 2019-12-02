import React from 'react';
import { useTranslation } from 'react-i18next';

const Page2 = (props) => {
    const { t } = useTranslation();
    const id = props.match.params.id;

    return (
        <div>
            <h1>{t('page2')}</h1>
            <h2>ID: [{id}]</h2>
        </div>
    );
};
export default Page2;
