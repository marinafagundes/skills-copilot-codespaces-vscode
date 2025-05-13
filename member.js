function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'modules/skill/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        } 
    }
}