import BudgetModule from 'modules/Dashboard/components/BudgetModule'
import SidebarWithHeader from 'modules/Dashboard/components/DashboardNavbar'
import React from 'react'

const BudgetPage = () => {
  return (
    <SidebarWithHeader>
      <BudgetModule/>
    </SidebarWithHeader>
  )
}

export default BudgetPage