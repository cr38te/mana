import React, { useState } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Container, Row, Column } from '../../base/grid';
import { ParagraphCSS } from '../../base/typography';
import { H1 } from '../../base/typography';
import { device } from '../../base/mediaquery';
import { useForm } from 'react-hook-form';
import { Button } from '../../base/button';
import WhatsappIcon from '../../../icons/whatsapp';
import useSubmitContactFormData from '../../../utils/use-submit-form-data';
import Script from 'next/script';
const { NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_CODE } = process.env;

import { randomBytes } from 'crypto';

const StyledForm = styled.form`
    margin-top: ${(props) => props.theme.spacing.doubleInset};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    & .alert {
        border: 1px solid red;
        background-color: pink;
        color: red;
        padding: 15px 15px;
        height: 60px;
        font-size: 14px;
        line-height: 24px;
        text-align: left;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0;
    }
    @media ${device.mobileL} {
        width: 100%;
        margin-bottom: ${(props) => props.theme.spacing.tripleInset};
        flex-direction: column;
    }

    &.sidebar {
        display: block;
        > div {
            background: ${(p) => p.theme.colors.primary};
        }
    }
`;

const FormGroup = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    &.checkboxGroup {
        flex-direction: row;
        align-items: center;
        margin-bottom: 30px;
    }
`;

const TextField = styled.input`
    margin-bottom: ${(props) => props.theme.spacing.inset};
    border-radius: 0;
    border: 0px;
    padding: 15px 20px;
    height: 60px;
    position: relative;
    background-color: ${(props) => props.theme.colors.primary}33;
    color: red;

    &.sidebar {
        background-color: ${(props) => props.theme.colors.quinary}33;
        color: ${(props) => props.theme.colors.defaultPrimary};
        &::placeholder {
            color: ${(props) => props.theme.colors.defaultPrimary}!important;
        }
        &:focus {
            background-color: ${(props) =>
                props.theme.colors.defaultSecondary}33;
        }
    }
    &:focus {
        outline: none;
        border: 1px solid #666;
        background-color: ${(props) => props.theme.colors.octonary}33;
    }
    &::placeholder {
        color: ${(props) => props.theme.colors.quaternary} !important;
        opacity: 1;
    }
    &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: red;
    }
    &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: red;
    }
`;

const TextArea = styled(TextField).attrs({
    as: 'textarea'
})`
    height: auto;
`;

const CheckboxField = styled.input`
    margin-right: 8px;
    margin-bottom: 0;
    height: 20px;
    border: 1px solid #cccccc;
`;

// const Label = styled.label`
//     color: ${(props) => props.theme.colors.defaultPrimary};
//     font-size: 14px;
//     line-height: 28px;
// `;

const StyledButton = styled(Button).attrs({
    as: 'button'
})`
    width: 220px;
    border: 0;
    text-transform: ${(p) => [p.texttransform]};
`;

const MessageDone = styled.strong`
    color: ${(props) => props.theme.colors.defaultPrimary};
    letter-spacing: 0.42px;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: ${(props) => props.theme.spacing.inset};
`;

const AS = styled.div`
    display: none;
`;

const Items = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Paragraph = styled.div`
    ${ParagraphCSS}
    color:${(p) => p.theme.colors[p.color]};
    font-family: ${(p) => p.theme.fonts.bodyFont};
    font-weight: ${(p) => p.theme.fontWeight.light};
    padding-top: ${(p) => p.theme.spacing[p.pt]};
    padding-bottom: ${(p) => p.theme.spacing[p.pb]};

    font-size: 14px;
    @media ${device.mobileL} {
        text-align: center;
    }
`;

const IconWrapper = styled.a`
    transition: ${(props) => props.theme.transition.linear};
    padding: 0;
    margin-right: 14px;
    margin-left: 0;
    align-self: center;
    width: 65px;
    height: 65px;
    background-color: #25d366;
    border-radius: 50%;
    display: flex;
    flex-direction: ${(p) => p.theme.direction.row};
    justify-content: ${(p) => p.theme.justifyContent.center};
    align-items: ${(p) => p.theme.alignItems.center};

    &:hover {
        svg {
            color: ${(props) => props.theme.colors.defaultSecondary};
        }
    }
`;

const Label = styled.label`
    color: ${(p) => p.theme.colors.quinary};
    font-weight: 600;
    font-size: 16px;
    margin-left: 5px;

    &.smaller {
        font-size: 14px;
    }
`;
const CheckBox = styled.input`
    margin: 0px;
`;

const TwoColumn = styled.div`
    display: flex;
    flex-direction: ${(p) => p.theme.direction.row};
    justify-content: ${(p) => p.theme.justifyContent.spaceBetween};

    > div {
        .nestedSelect {
            width: 100%;
        }

        div:first-child {
            margin-right: 0;
        }
        div:last-child {
            margin-left: 0;
            margin-bottom: 0px;
        }
    }

    div:last-child {
        margin-left: 0px;
    }

    @media ${device.laptop} {
        flex-direction: ${(p) => p.theme.direction.row};
    }

    @media ${device.mobileL} {
        flex-direction: ${(p) => p.theme.direction.column};
    }
`;

export default function Form({ ...props }) {
    const nonce = randomBytes(8).toString('base64');

    const {
        buttonText = 'Submit',
        isStep = false,
        isModel = false,
        classNameText,
        stepperData
    } = props || {};
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    const [response, loading, error, submit] = useSubmitContactFormData(
        'handle_contact_form_submission',
        'contactpage'
    );
    const submitDataCombine = (data) => {
        const newData = { ...data, stepperData };
        submit(newData);
    };

    return (
        <>
            <Script
                async
                defer
                src={`https://www.google.com/recaptcha/api.js?render=${NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_CODE}`}
                nonce={nonce}
                strategy="afterInteractive"
            />
            <StyledForm id="subForm" onSubmit={handleSubmit(submitDataCombine)}>
                <Column width={isStep ? '50%' : '100%'} direction="column">
                    <FormGroup>
                        <TextField
                            id="fullName"
                            type="text"
                            placeholder="Full name"
                            name="fullName"
                            className={classNameText}
                            {...register('fullName', {
                                required: true,
                                maxLength: 25
                            })}
                        />
                        {errors.fullName && (
                            <span className="alert" role="alert">
                                Required
                            </span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            type="address"
                            placeholder="Address"
                            name="address"
                            className={classNameText}
                            {...register('address', {
                                required: true,
                                minLength: 6,
                                maxLength: 12
                            })}
                        />
                        {errors.address && (
                            <span className="alert" role="alert">
                                Required
                            </span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            id="telephone"
                            type="telephone"
                            placeholder="Telephone"
                            name="telephone"
                            className={classNameText}
                            {...register('telephone', { required: true })}
                        />
                        {errors.telephone && (
                            <span className="alert" role="alert">
                                Required
                            </span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            className={classNameText}
                            {...register('email', { required: true })}
                        />
                        {errors.email && (
                            <span className="alert" role="alert">
                                Required
                            </span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <AS>
                            <TextField
                                type="text"
                                id="url"
                                name="url"
                                placeholder="Leave this empty"
                                {...register('url')}
                            />
                        </AS>
                    </FormGroup>

                    {!isStep && !isModel && (
                        <FormGroup>
                            <TextArea
                                id="message"
                                name="message"
                                rows="10"
                                cols="50"
                                placeholder="Message"
                                {...register('message', { required: true })}
                            />
                            {errors.message && (
                                <span className="alert" role="alert">
                                    Required
                                </span>
                            )}
                            <StyledButton
                                type="submit"
                                bgColor="primary"
                                color="defaultPrimary"
                                texttransform="uppercase"
                                style={{
                                    display: `${
                                        response?.status === 'ok'
                                            ? 'none'
                                            : 'block'
                                    }`
                                }}
                            >
                                {buttonText}
                            </StyledButton>
                        </FormGroup>
                    )}

                    {(isStep || isModel) && (
                        <>
                            <TwoColumn>
                                <FormGroup className="checkboxGroup">
                                    <CheckBox
                                        type="checkbox"
                                        {...register('preApprovedByBank', {
                                            required: false
                                        })}
                                    />
                                    <Label className="smaller">
                                        PreApproved By Bank
                                    </Label>
                                </FormGroup>
                                <FormGroup className="checkboxGroup">
                                    <CheckBox
                                        type="checkbox"
                                        {...register('approvedBank', {
                                            required: false
                                        })}
                                    />
                                    <Label className="smaller">
                                        Approved By bank
                                    </Label>
                                </FormGroup>
                                <FormGroup className="checkboxGroup">
                                    <CheckBox
                                        type="checkbox"
                                        {...register('cashClient', {
                                            required: false
                                        })}
                                    />
                                    <Label className="smaller">
                                        Cash Client
                                    </Label>
                                </FormGroup>
                            </TwoColumn>
                            <StyledButton
                                type="submit"
                                bgColor={isModel ? 'defaultPrimary' : 'primary'}
                                color={
                                    isModel
                                        ? 'defaultSecondary'
                                        : 'defaultPrimary'
                                }
                                texttransform="uppercase"
                                style={{
                                    display: `${
                                        response?.status === 'ok'
                                            ? 'none'
                                            : 'block'
                                    }`,
                                    opacity: '0.7'
                                }}
                            >
                                {buttonText}
                            </StyledButton>
                        </>
                    )}
                </Column>
                {!isStep && !isModel && (
                    <Column
                        justifyContent="center"
                        direction="column"
                        alignItems="center"
                    >
                        <Items>
                            <IconWrapper
                                href="https://api.whatsapp.com/send/?phone=5837700"
                                title="whatsApp"
                                target="_blank"
                                rel="noopener"
                            >
                                <WhatsappIcon
                                    iconColor="defaultPrimary"
                                    iconSize="40px"
                                />
                            </IconWrapper>
                            <Paragraph>Contact us!</Paragraph>
                        </Items>
                        <MessageDone
                            style={{
                                display: `${
                                    response?.status === 'ok' ? 'block' : 'none'
                                }`
                            }}
                        >
                            Thank you for submitting your information.
                            We`&apos;`ll contact you as soon as possible.
                        </MessageDone>
                    </Column>
                )}
            </StyledForm>
        </>
    );
}
