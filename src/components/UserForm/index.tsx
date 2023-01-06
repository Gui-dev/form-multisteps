import React from "react"
import { DataProps } from "../../App"

type UserFormProps = {
  data: DataProps
  onUpdateField: (key: string, value: string) => void
}

export const UserForm = ({ data, onUpdateField }: UserFormProps) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          value={data?.name}
          onChange={(event) => onUpdateField('name', event.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          value={data?.email}
          onChange={(event) => onUpdateField('email', event.target.value)}
          required
        />
      </div>
    </div>
  )
}
