import React from 'react';
import './MemberList.css';

const MemberList = ({form, children, test}) => {
    console.log(form)
    console.log(children)
    console.log(test)
  return (
    <main className="MemberList">
      <div className="title2">
        라오킹 버프 사이트
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="members-wrapper">
        { children }
      </section>
    </main>
  );
};

export default MemberList;