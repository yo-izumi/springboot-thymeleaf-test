package izm.sample.batch.testbatch.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import izm.sample.batch.testbatch.resources.MemberEntity;
import izm.sample.batch.testbatch.services.MemberService;

@RestController
@CrossOrigin("*")
public class ApiController {

    @Autowired
    private MemberService memberService;

    @GetMapping("/api/List")
    @ResponseBody
    public List<MemberEntity> getMemberList() {
        return this.memberService.getMemberList();
    }

    @GetMapping("/api/Member")
    @ResponseBody
    public MemberEntity getMember(@RequestParam String id) {
        return this.memberService.getMemberById(id);
    }

    @PostMapping("/api/Update")
    public MemberEntity updateMember(@RequestBody MemberEntity entry) {
        this.memberService.saveMember(entry);
        return entry;
    }
}
