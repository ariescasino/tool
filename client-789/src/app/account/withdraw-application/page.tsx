"use client";

import authServicer from "@/api/services/auth.servicer";
import paymentService from "@/api/services/payment.service";
import AddBank from "@/components/WithdrawApplicationComponents/AddBank";
import ChangeMoneyPassword from "@/components/WithdrawApplicationComponents/ChangeMoneyPassword";
import LayoutDeposit from "@/components/WithdrawApplicationComponents/LayoutDeposit";
import WithdrawMoney from "@/components/WithdrawApplicationComponents/WithdrawMoney";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type IItemBank = {
  id: number;
  name: string;
  code: string;
  bin: string;
  shortName: string;
  logo: string;
  transferSupported: number;
  lookupSupported: number;
  short_name: string;
  support: number;
  isTransfer: number;
  swift_code: string;
};

type IBankUser = {
  id: number;
  uid: number;
  bankProvider: string;
  bankAccountNumber: string;
  bankAccountName: string;
  bankBranch: string;
};

type IBankOfUser = {
  balance: number;
  bankUsers: IBankUser[];
  name: string;
};

export default function RutTien() {
  const [statusWithDraw, setStatusWithDraw] = useState({
    hasBankUserInfo: false,
    hasWithdrawPassword: false,
  });

  const [listBank, setListBank] = useState<IItemBank[]>([]);

  const [pageIndex, setPageIndex] = useState<"addBank" | "transaction">(
    "addBank"
  );

  // useEffect(() => {
  //   if (!statusWithDraw.hasBankUserInfo &&
  //     bankOfUser.bankUsers.length < 2) {

  //   }
  // }, [pageIndex]);

  const { data, isLoading } = useQuery({
    queryFn: () => {
      return authServicer.getWithdrawalCondition();
    },
    queryKey: ["getWithdrawalCondition"],
  });

  const { data: allBank } = useQuery({
    queryFn: () => {
      return paymentService.getAllVNBanks();
    },
    queryKey: ["getAllVNBanks"],
  });

  const { data: userInfoBank, refetch } = useQuery({
    queryFn: () => {
      return paymentService.getAllBankUser();
    },
    queryKey: ["getAllBankUser"],
  });

  useEffect(() => {
    if (data) {
      setStatusWithDraw(data);
    }
  }, [data]);

  useEffect(() => {
    if (allBank) {
      setListBank(allBank);
    }
  }, [allBank]);

  // useEffect(() => {
  //   if (userInfoBank) {
  //     setBankOfUser(userInfoBank);
  //   }
  // }, [userInfoBank]);
  useEffect(() => {
    if (userInfoBank && userInfoBank.bankUsers) {
      setPageIndex(
        userInfoBank.bankUsers.length > 0 ? "transaction" : "addBank"
      );
    }
  }, [userInfoBank]);

  if (isLoading) {
    return <div>Loading</div>;
  } else if (!statusWithDraw.hasWithdrawPassword) {
    return (
      <ChangeMoneyPassword
        setStatusWithDraw={setStatusWithDraw}
        statusWithDraw={statusWithDraw}
      />
    );
  } else {
    return (
      <LayoutDeposit
        bankOfUser={userInfoBank}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}>
        {pageIndex === "addBank" ? (
          <AddBank
            listBank={listBank}
            refetch={refetch}
            setPageIndex={setPageIndex}
          />
        ) : (
          <WithdrawMoney listBank={listBank} bankOfUser={userInfoBank} />
        )}
      </LayoutDeposit>
    );
  }
}
