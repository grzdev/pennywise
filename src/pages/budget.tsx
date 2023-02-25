import BudgetModule from 'modules/Dashboard/modules/BudgetModule'
import SidebarWithHeader from 'modules/Dashboard/modules/DashboardNavbar'
import React from 'react'

const BudgetPage = () => {
  return (
    <SidebarWithHeader>
      <BudgetModule/>
    </SidebarWithHeader>
  )
}

export default BudgetPage