import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Widget, StackedBar, Tabs } from '@carto/airship'
import SpendChart from './SpendChart'
import { getFocusedTab } from '../actions/mapsettings';

class AverageAccountSpend extends Component {

  render() {
    return (
      <div>
        <Widget>
          <Widget.Title>Spend per Account</Widget.Title>
            <Widget.Description>Average spend per customer</Widget.Description>
              <Tabs selected={this.props.focusedTab}>
                <Tabs.Panel label="4 Minutes">
                  <SpendChart
                    minutes={'4 min.'}
                    column={'index_weighted_avg_spend_acct'}
                  />
                </Tabs.Panel>
                <Tabs.Panel label="8 Minutes">
                  <SpendChart
                    minutes={'8 min.'}
                    column={'index_weighted_avg_spend_acct'}
                  />
                </Tabs.Panel>
                <Tabs.Panel label="12 Minutes">
                  <SpendChart
                    minutes={'12 min.'}
                    column={'index_weighted_avg_spend_acct'}
                  />
                </Tabs.Panel>
              </Tabs>
          </Widget>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  analyzedStore: state.mapsettings.analyzedStore,
  focusedTab: state.mapsettings.focusedTab
});

const mapDispatchToProps = (dispatch) => ({
    getFocusedTab: (tab) => dispatch(getFocusedTab(tab))
})

export default connect(mapStateToProps, mapDispatchToProps)(AverageAccountSpend);