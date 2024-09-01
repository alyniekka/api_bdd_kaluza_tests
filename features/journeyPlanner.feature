Feature: Journey planning
  Scenario: Quickest journey within a city
    Given "current_user" is at "69 Notting Hill Gate, London"
    And "current_user" wants to travel to "Southbank Centre, London"
    And "current_user" is traveling on "04.09.2024"
    When "current_user" requests the "quickest" journey plan
    Then "current_user" should receive the "quickest" journey plan

  Scenario: Journey between cities
    Given "current_user" is at "69 Notting Hill Gate, London"
    And "current_user" wants to travel to "Temple Meads, Bristol"
    When "current_user" requests the journey plan
    Then "current_user" should receive the journey plan

  Scenario: Journey from the airport to the office by a specific time
    Given "belfast_qa_lead" is at "Luton Airport, Luton"
    And "belfast_qa_lead" wants to travel to "69 Notting Hill Gate, London"
    And "belfast_qa_lead" is traveling on "04.09.2024"
    And "belfast_qa_lead" needs to arrive at the destination by "8:50am"
    When "belfast_qa_lead" requests the journey plan
    Then "belfast_qa_lead" should receive the journey plan
