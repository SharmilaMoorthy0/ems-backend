
const express=require('express')


const { newEmploye, DeleteEmploye, allEmploye, allEmployeForAdmin, editEmploye } = require('../controller/Manage.controller')
const router=express.Router()


router.post('/new/employe',newEmploye)
router.delete('/Delete/employe/:id',DeleteEmploye)

router.get('/all/employe/admin',allEmployeForAdmin)

router.put('/update/employe/:id',editEmploye)



module.exports=router