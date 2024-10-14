
const express=require('express')


const { newEmploye, DeleteEmploye, allEmployeForAdmin, editEmploye, EmployeSearch } = require('../controller/Manage.controller')
const router=express.Router()


router.post('/new/employe',newEmploye)
router.delete('/Delete/employe/:id',DeleteEmploye)

router.get('/all/employe/admin',allEmployeForAdmin)
router.post('/employe/search',EmployeSearch)
router.put('/update/employe/:id',editEmploye)



module.exports=router