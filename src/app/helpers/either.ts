export type Either <E,S> = Erro <E,S> | Success <E,S>

export class Erro <E,S> {
  value: E;
  constructor(value:E){
    this.value = value;
  }

  isErro(): this is Erro<E,S> {
    return true
  }

  isSuccess(): this is Success<E,S> {
    return false
  }
}

export class Success <E,S> {
  value: S;
  constructor(value:S) {
    this.value = value;
  }

  isErro(): this is Erro<E,S> {
    return false
  }

  isSuccess(): this is Success<E,S> {
    return true
  }
}

export const erro = <E,S>(e:E): Either<E,S> => {
  return new Erro(e)
}

export const success = <E,S>(s:S): Either<E,S> => {
  return new Success(s)
}

