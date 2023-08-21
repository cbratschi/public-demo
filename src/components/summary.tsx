'use client';

import React from 'react';

import { useTranslation } from 'react-i18next';

export default function Summary() {
    //cbxx FIXME https://github.com/payloadcms/payload/issues/3182
    const { i18n } = useTranslation('custom');

    //cbxx works fine here
    console.dir(i18n);

    return (
        <p>
            i18n user language: {i18n.language}
        </p>
    );
}

export function createSummary() {
    return function SummaryCollection () {
        return (
            <Summary />
        );
    };
}