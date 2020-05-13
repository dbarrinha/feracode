import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { FormInput, InputCustom, FormLabel, ButtomCustom, SpanError } from './styles';
import { signIn } from '../../services/auth'
import { useHistory } from "react-router-dom";

export default function LoginComponent(props) {
  const { register, handleSubmit, errors } = useForm()
  let [isError, setIsError] = useState(false)
  let hist = useHistory()
  const onSubmit = async data => {
    setIsError(false)
    signIn(data).then(res => {
      console.log(res)
      hist.push("/home");
    }).catch(err =>{
      setIsError(true)
    })
  }

  return (
    <div style={{ paddingTop: 50, paddingRight: 20, paddingLeft: 40 }} className="animated fadeIn " >
      <h2 style={{ color: '#999999', fontSize: 30 }}>FeraCode Login</h2>
      <form style={{ marginTop: 10, marginBottom: 10 }} onSubmit={handleSubmit(onSubmit)}>
        {isError && <h5 style={{ color: '#e67' }}>Email inválido!</h5>}

        <FormInput>
          <FormLabel>E-mail</FormLabel>
          <InputCustom name="email" ref={register({ required: true })} />
          {errors.email && <SpanError>Este campo é obrigatório</SpanError>}
        </FormInput>

        <FormInput>
          <FormLabel>Senha</FormLabel>
          <InputCustom name="password" type="password" ref={register({ required: true })} />
          {errors.password && <SpanError>Este campo é obrigatório</SpanError>}
        </FormInput>

        <div style={{ display: 'flex', width: 300, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <ButtomCustom type="submit">
            {"Entrar"}
          </ButtomCustom>
          <span style={{ fontSize: 12, color: 'black', display: 'block', marginTop: 10, cursor: 'pointer' }} onClick={() => props.goToCad()}>
            {"Ainda não possue conta? Cadastre-se"}
          </span>
        </div>

      </form>
    </div>
  );
}
