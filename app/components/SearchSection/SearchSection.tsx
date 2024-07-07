// components/SearchSection.tsx
import React from 'react';
import FormField from './FormField';
import FormFieldSelect from './FormFieldSelect';

const SearchSection: React.FC = () => (
  <section className="ftco-section ftco-no-pb ftco-no-pt">
    <div className="container">
      <div className="row justify-content-center pb-0 pb-mb-5 pt-5 pt-md-0">
        <div className="col-md-12 heading-section ftco-animate">
          <span className="subheading">트리플러터와 떠나요</span>
          <h2 className="mb-4">어디로 가고 싶나요?</h2>
          <p>트리플러터가 쉽고 빠르게 여행 계획을 세워드릴께요</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="search-wrap-1 ftco-animate p-4">
            <form action="#" className="search-property-1">
              <div className="row">
                <FormField
                  label="목적지"
                  iconClass="ion-ios-search"
                  type="text"
                  placeholder="Search place"
                  className="form-control"
                />
                <FormField
                  label="체크인 날짜"
                  iconClass="ion-ios-calendar"
                  type="text"
                  placeholder="Check In Date"
                  className="form-control checkin_date"
                />
                <FormField
                  label="체크아웃 날짜"
                  iconClass="ion-ios-calendar"
                  type="text"
                  placeholder="Check Out Date"
                  className="form-control checkout_date"
                />
                <FormFieldSelect
                  label="예산"
                  iconClass="ion-ios-arrow-down"
                  options={[
                    '30만원 이하',
                    '50만원 이하',
                    '70만원 이하',
                    '100만원 이하',
                    '150만원 이하',
                    '200만원 이하',
                    '250만원 이하',
                    '300만원 이상',
                  ]}
                  className="form-control"
                />
                <div className="col-lg align-self-end">
                  <div className="form-group">
                    <div className="form-field">
                      <input type="submit" defaultValue="Search" className="form-control btn btn-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SearchSection;
