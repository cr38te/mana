import React, { useState } from 'react';
import styled from 'styled-components';
import NewsletterForm from './newsletter-form';
import Title from '../../base/heading';
import { INewsletter } from '../../../utils/interface';
import { Row } from '../../base';
const Container = styled.div`
    width: 100%;
    height: auto;
`;


export default function Newsletter({
    newsLetter,
    socialLinks
}: {
    newsLetter: INewsletter;
    socialLinks: any;
}) {
    const { title, emailPlaceholderText, buttonText, namePlaceholderText } =
        newsLetter || {};

    return (
        <Container>
            {title && (
                <Title
                    variant="h2"
                    color="defaultSecondary"
                    title={title}
                    textTransform="none"
                    className="asH2"
                />
            )}
            <NewsletterForm
                emailPlaceholderText={emailPlaceholderText}
                namePlaceholderText={namePlaceholderText}
                buttonText={buttonText}
            />
        </Container>
    );
}
