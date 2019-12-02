import React from 'react';
import { useTranslation } from 'react-i18next';

const Page1 = (props) => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('page1')}</h1>
        </div>
    );
};
export default Page1;
