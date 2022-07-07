import express from 'express'
import { checkAccountAOV, checkAccountCOD, checkAccountFF, checkAccountGI, checkAccountML, checkAccountSM } from '../controller/checkaccountController.js'

const checkaccount = express()

checkaccount.get('/freefire/:id', checkAccountFF)
checkaccount.get('/mobilelegends/:id/:zoneid', checkAccountML)
checkaccount.get('/arenaofvalor/:id', checkAccountAOV)
checkaccount.get('/cod/:id', checkAccountCOD)
checkaccount.get('/gi/:id', checkAccountGI)
checkaccount.get('/sm/:id', checkAccountSM)

export default checkaccount
