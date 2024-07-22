import { ExceptionError } from "./exceptionError"

const strategyErrorSql = () => {
  const code = (c: number) => {
    const cod: { [key: number]: (c: number) =>  ExceptionError } = {
      1364(c:number){
        return new ExceptionError("Unable to register, missing information", 404)
      },
      1062(c:number){
        return new ExceptionError("This information is recorded", 404)
      }
      
    }
    const sqlError = cod[c]
    if (sqlError) {
      return sqlError(c)
    }
    return new ExceptionError("Internal Error Server", 500);
  }
  return {code}
}

export default strategyErrorSql