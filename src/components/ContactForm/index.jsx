import React from 'react'
import { ErrorMessage, Formik } from "formik"
import * as S from "./style"
import { Container } from '../Container/style'
import { Title } from '../WhyUs/style'
import * as Yup from 'yup'
import axios from 'axios'
import ErrorMessageHandler from '../ErrorMessageHandler'

const ContactForm = () => {

  const ContactInitialValues = {
    name: "",
    email: ""
  }

  const onSubmit = async (values, {resetForm}) => {
   const res = await axios.post("https://reqres.in/api/users", {
    data: values,
   });
    if(res.status == 201){
      resetForm();
    } else {
      console.log("error")
    }
  };

  const ContactFormValidation = Yup.object().shape({
    name: Yup.string().min(1, "Too short!").required(),
    email: Yup.string().email("Invalid email").required()
  })

  return (
    <S.ContactFormWrapper>
      <Container>
        <S.FormContent>
          <Title>Мы Вам перезвоним</Title>
          <S.FormContnetText>
            Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.
          </S.FormContnetText>
          <Formik initialValues={ContactInitialValues} onSubmit={onSubmit} validationSchema={ContactFormValidation} validateOnChange>
            {(formik) => {
              console.log(formik)
              return(
                <S.ContactForm onSubmit={formik.handleSubmit}>
                  <S.FormRows>
                    <S.FormInput
                      type="text" 
                      name="name"
                      className={`${formik.errors.name && "error"}`}
                      onChange={formik.handleChange}
                      placeholder="Ваше имя"
                    />
                    <ErrorMessageHandler name="name"/>
                  </S.FormRows>

                  <S.FormRows>
                    <S.FormInput
                      type="email"
                      name="email"
                      className={`${formik.errors.email && "error"}`}
                      onChange={formik.handleChange}
                      placeholder="Ваш Email"
                    />
                    <ErrorMessageHandler name="email"/>
                  </S.FormRows>

                  <S.SubmitBtn type="submit">Отправить</S.SubmitBtn>
                </S.ContactForm>
              )
            }}
          </Formik>
        </S.FormContent>
      </Container>
    </S.ContactFormWrapper>
  )
}

export default ContactForm