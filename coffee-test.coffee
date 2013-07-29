$ ->
  changeTab = (e) ->
    e.preventDefault()
    $("#tabs li a.active").removeClass "active"
    $(@).addClass "active"
  $("#tabs ul li a").click changeTab
