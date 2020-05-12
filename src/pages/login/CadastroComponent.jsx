import React,{useState} from 'react';
import {useForm} from 'react-hook-form'
import { FormInput, InputCustom, FormLabel, ButtomCustom, ButtomLogin, SpanError } from './styles';
import InputMask from 'react-input-mask';
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CadastroComponent(props) {

  const { register, handleSubmit, errors } = useForm()
  let [isError, setIsError] = useState(false)
  const onSubmit = async data => {
    setIsError(false)
    //caadastra
    /*if (res) {
      props.goToLogin()
    } else {
      setIsError(true)
    }*/
  }

  return (
    <div style={{ paddingTop: 50, paddingRight: 20, paddingLeft: 40 }}  className="animated fadeIn " >
      <h2 style={{ color: '#999999', fontSize: 30 }}>FeraCode Cadastro</h2>
      <form style={{ marginTop: 10, marginBottom: 10 }} onSubmit={handleSubmit(onSubmit)}>
      {isError && <h5 style={{ color: '#e67' }}>Email Já Cadastrado!</h5>}
        <FormInput>
          <FormLabel>Nome Completo</FormLabel>
          <InputCustom name="nome" ref={register({ required: true })} />
          {errors.nome && <SpanError>Este campo é obrigatório</SpanError>}
        </FormInput>

        <FormInput>
          <FormLabel>E-mail</FormLabel>
          <InputCustom name="email" ref={register({ required: true })} />
          {errors.email && <SpanError>Este campo é obrigatório</SpanError>}
        </FormInput>

        <FormInput>
          <FormLabel>CPF</FormLabel>
          <InputMask mask="999.999.999-99" >
          {(inputProps) => <InputCustom name="cpf" ref={register({ required: true })} />}
          </InputMask>
          {errors.cpf && <SpanError>Este campo é obrigatório</SpanError>}
        </FormInput>

        <div style={{ display: 'flex', width: 300, flexDirection: 'row', justifyContent: 'space-between' }}>
          <ButtomCustom type="submit" >
            {"Cadastrar"}
          </ButtomCustom>

          <ButtomLogin onClick={() => props.goToLogin()}>
            {"Login"}<IoIosArrowRoundForward style={{ width: 20, height: 18 }} />
          </ButtomLogin>
        </div>
      </form>
    </div>
  );
}
