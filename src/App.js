import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterPage from './views/layout/MasterPage';
import Home from './views/pages/Home';
import Category from "./views/pages/Category";
import Products from "./views/pages/Products";
import Uom from "./views/pages/Uom";
import About from "./views/pages/About"

import Login from './views/pages/Login';
import Signup from './views/pages/Signup';

import ManageUser from './views/pages/system/user/ManageUser';
import CreateUser from './views/pages/system/user/CreateUser';
import EditUser from './views/pages/system/user/EditUser';
import ViewUser from './views/pages/system/user/ViewUser';
import DeleteUser from './views/pages/system/user/DeleteUser';

import CreateLoanactiveInvoice from './views/pages/loanactive/CreateLoanactiveInvoice';
import CreateDipositInvoice from './views/pages/diposit/CreateDipositInvoice';
import CreateWithdrawInvoice from './views/pages/withdraw/CreateWithdrawInvoice';


import ManageMember from './views/pages/system/member/ManageMember';
import CreateMember from './views/pages/system/member/CreateMember';
import EditMember from './views/pages/system/member/EditMember';
import ViewMember from './views/pages/system/member/ViewMember';
import DeleteMember from './views/pages/system/member/DeleteMember';


import ManageLoanapplicant from './views/pages/system/loanapplicant/ManageLoanapplicant';
import CreateLoanapplicant from './views/pages/system/loanapplicant/CreateLoanapplicant';
import EditLoanapplicant from './views/pages/system/loanapplicant/EditLoanapplicant';
import ViewLoanapplicant from './views/pages/system/loanapplicant/ViewLoanapplicant';
import DeleteLoanapplicant from './views/pages/system/loanapplicant/DeleteLoanapplicant';


import ManageDiposit from './views/pages/system/diposit/ManageDiposit';
import CreateDiposit from './views/pages/system/diposit/CreateDiposit';
import EditDiposit from './views/pages/system/diposit/EditDiposit';
import ViewDiposit from './views/pages/system/diposit/ViewDiposit';
import DeleteDiposit from './views/pages/system/diposit/DeleteDiposit';

import ManageWithdraw from './views/pages/system/withdraw/ManageWithdraw';
import CreateWithdraw from './views/pages/system/withdraw/CreateWithdraw';
import EditWithdraw from './views/pages/system/withdraw/EditWithdraw';
import ViewWithdraw from './views/pages/system/withdraw/ViewWithdraw';
import DeleteWithdraw from './views/pages/system/withdraw/DeleteWithdraw';


import ManageIncome from './views/pages/system/income/ManageIncome';
import CreateIncome from './views/pages/system/income/CreateIncome';
import EditIncome from './views/pages/system/income/EditIncome';
import ViewIncome from './views/pages/system/income/ViewIncome';
import DeleteIncome from './views/pages/system/income/DeleteIncome';

import ManageExpense from './views/pages/system/expense/ManageExpense';
import CreateExpense from './views/pages/system/expense/CreateExpense';
import EditExpense from './views/pages/system/expense/EditExpense';
import ViewExpense from './views/pages/system/expense/ViewExpense';
import DeleteExpense from './views/pages/system/expense/DeleteExpense';




function App() { 
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />        
        <Route path="/home" element={<MasterPage/>}>
           <Route index element={<Home />} />           
           <Route path='/home/category' element={<Category />} />
           <Route path='/home/product' element={<Products/>} />
           <Route path='/home/uom' element={<Uom />} />
           <Route path="signup" element={<Signup />} />                   
        </Route>
        <Route path='/system' element={<MasterPage/>}>
           <Route path='/system/user' element={<ManageUser />} />
           <Route path='/system/user/create' element={<CreateUser />} />
           <Route path='/system/user/edit/:id' element={<EditUser />} />
           <Route path='/system/user/view/:id' element={<ViewUser />} />  
           <Route path='/system/user/delete/:id' element={<DeleteUser />} />           
        </Route>
        <Route path='/system' element={<MasterPage/>}>
           <Route path='/system/member' element={<ManageMember />} />
           <Route path='/system/member/create' element={<CreateMember />} />
           <Route path='/system/member/edit/:id' element={<EditMember />} />
           <Route path='/system/member/view/:id' element={<ViewMember />} />  
           <Route path='/system/member/delete/:id' element={<DeleteMember />} />           
        </Route>
        <Route path='/system' element={<MasterPage/>}>
           <Route path='/system/diposit' element={<ManageDiposit />} />
           <Route path='/system/diposit/create' element={<CreateDiposit />} />
           <Route path='/system/diposit/edit/:id' element={<EditDiposit />} />
           <Route path='/system/diposit/view/:id' element={<ViewDiposit />} />  
           <Route path='/system/diposit/delete/:id' element={<DeleteDiposit />} />           
        </Route>
        <Route path='/system' element={<MasterPage/>}>
           <Route path='/system/loanapplicant' element={<ManageLoanapplicant />} />
           <Route path='/system/loanapplicant/create' element={<CreateLoanapplicant />} />
           <Route path='/system/loanapplicant/edit/:id' element={<EditLoanapplicant />} />
           <Route path='/system/loanapplicant/view/:id' element={<ViewLoanapplicant />} />  
           <Route path='/system/loanapplicant/delete/:id' element={<DeleteLoanapplicant />} />           
        </Route>
        <Route path='/system' element={<MasterPage/>}>
           <Route path='/system/withdraw' element={<ManageWithdraw />} />
           <Route path='/system/withdraw/create' element={<CreateWithdraw />} />
           <Route path='/system/withdraw/edit/:id' element={<EditWithdraw />} />
           <Route path='/system/withdraw/view/:id' element={<ViewWithdraw />} />  
           <Route path='/system/withdraw/delete/:id' element={<DeleteWithdraw />} />           
        </Route>
        
        <Route path='/inventory' element={<MasterPage/>}>
           <Route path='/inventory/category' element={<ManageUser />} />
           <Route path='/inventory/products' element={<ManageUser />} />
        </Route>
        <Route path='/system' element={<MasterPage/>}>
           <Route path='/system/income' element={<ManageIncome />} />
           <Route path='/system/income/create' element={<CreateIncome />} />
           <Route path='/system/income/edit/:id' element={<EditIncome />} />
           <Route path='/system/income/view/:id' element={<ViewIncome />} />  
           <Route path='/system/income/delete/:id' element={<DeleteIncome />} />           
        </Route>
        <Route path='/system' element={<MasterPage/>}>
           <Route path='/system/expense' element={<ManageExpense />} />
           <Route path='/system/expense/create' element={<CreateExpense />} />
           <Route path='/system/expense/edit/:id' element={<EditExpense />} />
           <Route path='/system/expense/view/:id' element={<ViewExpense />} />  
           <Route path='/system/expense/delete/:id' element={<DeleteExpense />} />           
        </Route>
        <Route path='/loanactive' element={<MasterPage/>}>
           <Route path='/loanactive/create' element={<CreateLoanactiveInvoice/>} />
           <Route path='/loanactive/invoices' element={<ManageUser />} />
        </Route>
        <Route path='/diposit' element={<MasterPage/>}>
           <Route path='/diposit/create' element={<CreateDipositInvoice/>} />
           <Route path='/diposit/invoices' element={<ManageDiposit />} />
        </Route>
        <Route path='/withdraw' element={<MasterPage/>}>
           <Route path='/withdraw/create' element={<CreateWithdrawInvoice/>} />
           <Route path='/withdraw/invoices' element={<ManageDiposit />} />
        </Route>
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
